import JobProfile from '../models/jobProfileSchema.js'

export const createJobProfile = async (req, res) => {
    try {
        console.log(req.body)
        const {
            title,
            job_code,
            description,
            department,
            employment_type,
            experience_level,
            experience_min_years,
            experience_max_years,
            salary_min,
            salary_max,
            salary_currency,
            salary_type,
            is_salary_visible,
            location_type,
            address,
        } = req.body;

        if (salary_min > salary_max) {
            return res.status(400).json({
                message: "Minimum salary cannot be greater than maximum salary",
            });
        }
        const job = await JobProfile.create({
            title,
            job_code,
            description,
            department,
            employment_type,
            experience_level,
            experience_min_years,
            experience_max_years,
            salary_min,
            salary_max,
            salary_currency,
            salary_type,
            is_salary_visible,
            location_type,
            address,
        });

        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getAllJobProfiles = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        const skip = (page - 1) * limit;

        const jobs = await JobProfile.find()
            .sort({ createdAt: -1 })
            .skip(Number(skip))
            .limit(Number(limit));

        console.log(jobs)
        const total = await JobProfile.countDocuments();

        return res.status(200).json({
            success: true,
            total,
            page: Number(page),
            limit: Number(limit),
            data: jobs,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const getJobProfileById = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await JobProfile.findById(id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job profile not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: job,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateJobProfile = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            title,
            job_code,
            description,
            department,
            employment_type,
            experience_level,
            experience_min_years,
            experience_max_years,
            salary_min,
            salary_max,
            salary_currency,
            salary_type,
            is_salary_visible,
            location_type,
            address,
        } = req.body;

        const updatedJob = await JobProfile.findByIdAndUpdate(
            id,
            {
                title,
                job_code,
                description,
                department,
                employment_type,
                experience_level,
                experience_min_years,
                experience_max_years,
                salary_min,
                salary_max,
                salary_currency,
                salary_type,
                is_salary_visible,
                location_type,
                address,
            },
            { new: true, runValidators: true }
        );

        if (!updatedJob) {
            return res.status(404).json({
                success: false,
                message: "Job profile not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Job profile updated successfully",
            data: updatedJob,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteJobProfile = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedJob = await JobProfile.findByIdAndDelete(id);

        if (!deletedJob) {
            return res.status(404).json({
                success: false,
                message: "Job profile not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Job profile deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
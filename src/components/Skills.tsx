import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolio";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techLogos: Record<string, string> = {
  "Java (8–21)": `${DEVICON}/java/java-original.svg`,
  "Python": `${DEVICON}/python/python-original.svg`,
  "JavaScript": `${DEVICON}/javascript/javascript-original.svg`,
  "TypeScript": `${DEVICON}/typescript/typescript-original.svg`,
  "Node.js": `${DEVICON}/nodejs/nodejs-original.svg`,
  "Spring Boot": `${DEVICON}/spring/spring-original.svg`,
  "Spring WebFlux": `${DEVICON}/spring/spring-original.svg`,
  "Quarkus": `${DEVICON}/quarkus/quarkus-original.svg`,
  "RxJava": `${DEVICON}/reactivex/reactivex-original.svg`,
  "Express.js": `${DEVICON}/express/express-original.svg`,
  "FastAPI": `${DEVICON}/fastapi/fastapi-original.svg`,
  "JUnit": `${DEVICON}/junit/junit-original.svg`,
  "Cucumber": `${DEVICON}/cucumber/cucumber-plain.svg`,
  "SonarQube": `${DEVICON}/sonarqube/sonarqube-original.svg`,
  "Azure SQL": `${DEVICON}/azure/azure-original.svg`,
  "SQL Server": `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg`,
  "CosmosDB": `${DEVICON}/azure/azure-original.svg`,
  "MongoDB": `${DEVICON}/mongodb/mongodb-original.svg`,
  "Azure AKS": `${DEVICON}/azure/azure-original.svg`,
  "Azure Functions": `${DEVICON}/azure/azure-original.svg`,
  "Azure APIM": `${DEVICON}/azure/azure-original.svg`,
  "Data Factory": `${DEVICON}/azure/azure-original.svg`,
  "Blob Storage": `${DEVICON}/azure/azure-original.svg`,
  "Docker": `${DEVICON}/docker/docker-original.svg`,
  "Kubernetes": `${DEVICON}/kubernetes/kubernetes-original.svg`,
  "Terraform": `${DEVICON}/terraform/terraform-original.svg`,
  "Jenkins": `${DEVICON}/jenkins/jenkins-original.svg`,
  "Apache Kafka": `${DEVICON}/apachekafka/apachekafka-original.svg`,
  "Azure Data Factory": `${DEVICON}/azure/azure-original.svg`,
  "Redis Cache": `${DEVICON}/redis/redis-original.svg`,
  "Key Vault": `${DEVICON}/azure/azure-original.svg`,
  "Maven": `${DEVICON}/maven/maven-original.svg`,
  "Git": `${DEVICON}/git/git-original.svg`,
  "Bitbucket": `${DEVICON}/bitbucket/bitbucket-original.svg`,
  "Kibana": `${DEVICON}/kibana/kibana-original.svg`,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] accent-line" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent)] text-xs font-mono mb-3 tracking-[0.3em] uppercase">02 / Habilidades</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)]">Stack tecnico</h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="forge-card rounded-xl p-5 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-display font-bold text-[var(--text-primary)]">{skill.category}</h3>
              </div>

              {/* Tags with logos */}
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => {
                  const logo = techLogos[item];
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-white/[0.03] text-[var(--text-secondary)] border border-white/[0.04] hover:border-[var(--accent)]/25 hover:text-[var(--accent)] hover:bg-[var(--accent)]/[0.04] transition-all duration-200 cursor-default"
                    >
                      {logo && (
                        <img
                          src={logo}
                          alt=""
                          className="w-3.5 h-3.5 flex-shrink-0"
                          loading="lazy"
                        />
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

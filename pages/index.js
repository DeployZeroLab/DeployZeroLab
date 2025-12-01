import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>DeployZeroLab - AI & Deep Learning Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="hero">
        <h1>DeployZeroLab</h1>
        <p>AI & Deep Learning Deployment Solutions</p>
        <p>From Zero to Production in Minutes</p>
      </div>

      <div className="section">
        <h2>🤖 AI & Machine Learning Services</h2>
        <div className="features">
          <div className="feature">
            <h3>Deep Learning Models</h3>
            <p>Deploy neural networks, CNNs, RNNs, and transformer models with zero configuration. Support for PyTorch, TensorFlow, and ONNX formats.</p>
          </div>
          <div className="feature">
            <h3>Computer Vision</h3>
            <p>Image classification, object detection, semantic segmentation, and face recognition models ready for production deployment.</p>
          </div>
          <div className="feature">
            <h3>Natural Language Processing</h3>
            <p>Text analysis, sentiment analysis, language translation, and chatbot deployment with pre-trained and custom models.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🚀 Deployment Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Auto-Scaling</h3>
            <p>Intelligent scaling based on inference load with GPU/CPU optimization for cost-effective AI model serving.</p>
          </div>
          <div className="feature">
            <h3>Model Versioning</h3>
            <p>A/B testing, canary deployments, and rollback capabilities for ML models with performance monitoring.</p>
          </div>
          <div className="feature">
            <h3>Edge Deployment</h3>
            <p>Deploy AI models to edge devices, mobile apps, and IoT systems with optimized inference engines.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🛠️ Technology Stack</h2>
        <div className="tech-stack">
          <span className="tech">PyTorch</span>
          <span className="tech">TensorFlow</span>
          <span className="tech">ONNX</span>
          <span className="tech">Docker</span>
          <span className="tech">Kubernetes</span>
          <span className="tech">AWS</span>
          <span className="tech">CUDA</span>
          <span className="tech">TensorRT</span>
          <span className="tech">FastAPI</span>
          <span className="tech">MLflow</span>
        </div>
      </div>

      <div className="section">
        <h2>📊 Use Cases</h2>
        <ul>
          <li><strong>Healthcare:</strong> Medical image analysis, drug discovery, diagnostic AI</li>
          <li><strong>Finance:</strong> Fraud detection, algorithmic trading, risk assessment</li>
          <li><strong>Retail:</strong> Recommendation systems, demand forecasting, price optimization</li>
          <li><strong>Manufacturing:</strong> Quality control, predictive maintenance, supply chain optimization</li>
          <li><strong>Autonomous Systems:</strong> Self-driving cars, drones, robotics</li>
        </ul>
      </div>
    </>
  )
}

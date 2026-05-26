import React from 'react';

export interface LanCloudQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudQuestion: React.FC<LanCloudQuestionProps>;
export default LanCloudQuestion;

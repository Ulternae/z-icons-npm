import React from 'react';

export interface LanCloudQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudQuestionThin: React.FC<LanCloudQuestionThinProps>;
export default LanCloudQuestionThin;

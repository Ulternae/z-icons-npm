import React from 'react';

export interface LanCloudQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudQuestionSolid: React.FC<LanCloudQuestionSolidProps>;
export default LanCloudQuestionSolid;

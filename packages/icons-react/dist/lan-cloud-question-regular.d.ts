import React from 'react';

export interface LanCloudQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudQuestionRegular: React.FC<LanCloudQuestionRegularProps>;
export default LanCloudQuestionRegular;

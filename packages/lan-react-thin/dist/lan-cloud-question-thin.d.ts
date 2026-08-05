import React from 'react';

export interface LanCloudQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudQuestionThin(props: LanCloudQuestionThinProps): React.ReactElement;
export default LanCloudQuestionThin;

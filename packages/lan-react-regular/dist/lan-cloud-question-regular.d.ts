import React from 'react';

export interface LanCloudQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudQuestionRegular(props: LanCloudQuestionRegularProps): React.ReactElement;
export default LanCloudQuestionRegular;

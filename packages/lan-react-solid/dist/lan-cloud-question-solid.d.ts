import React from 'react';

export interface LanCloudQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudQuestionSolid(props: LanCloudQuestionSolidProps): React.ReactElement;
export default LanCloudQuestionSolid;

import React from 'react';

export interface LanCloudQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudQuestion(props: LanCloudQuestionProps): React.ReactElement;
export default LanCloudQuestion;

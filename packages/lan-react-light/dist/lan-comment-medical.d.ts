import React from 'react';

export interface LanCommentMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMedical(props: LanCommentMedicalProps): React.ReactElement;
export default LanCommentMedical;

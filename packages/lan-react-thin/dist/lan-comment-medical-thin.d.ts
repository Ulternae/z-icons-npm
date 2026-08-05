import React from 'react';

export interface LanCommentMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMedicalThin(props: LanCommentMedicalThinProps): React.ReactElement;
export default LanCommentMedicalThin;

import React from 'react';

export interface LanBookMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookMedicalThin(props: LanBookMedicalThinProps): React.ReactElement;
export default LanBookMedicalThin;

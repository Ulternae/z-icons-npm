import React from 'react';

export interface LanBookMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookMedical(props: LanBookMedicalProps): React.ReactElement;
export default LanBookMedical;

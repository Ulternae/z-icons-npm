import React from 'react';

export interface LanBookMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookMedicalRegular(props: LanBookMedicalRegularProps): React.ReactElement;
export default LanBookMedicalRegular;

import React from 'react';

export interface LanBooksMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBooksMedicalRegular(props: LanBooksMedicalRegularProps): React.ReactElement;
export default LanBooksMedicalRegular;

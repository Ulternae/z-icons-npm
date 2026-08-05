import React from 'react';

export interface LanBooksMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBooksMedical(props: LanBooksMedicalProps): React.ReactElement;
export default LanBooksMedical;

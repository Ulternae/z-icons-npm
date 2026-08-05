import React from 'react';

export interface LanFilesMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilesMedical(props: LanFilesMedicalProps): React.ReactElement;
export default LanFilesMedical;

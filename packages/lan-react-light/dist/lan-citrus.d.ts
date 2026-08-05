import React from 'react';

export interface LanCitrusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitrus(props: LanCitrusProps): React.ReactElement;
export default LanCitrus;

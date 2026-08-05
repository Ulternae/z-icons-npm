import React from 'react';

export interface LanDinosaurProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDinosaur(props: LanDinosaurProps): React.ReactElement;
export default LanDinosaur;

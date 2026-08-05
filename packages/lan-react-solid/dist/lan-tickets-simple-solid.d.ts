import React from 'react';

export interface LanTicketsSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsSimpleSolid(props: LanTicketsSimpleSolidProps): React.ReactElement;
export default LanTicketsSimpleSolid;

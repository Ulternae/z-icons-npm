import React from 'react';

export interface LanGrillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrill(props: LanGrillProps): React.ReactElement;
export default LanGrill;

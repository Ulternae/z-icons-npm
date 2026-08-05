import React from 'react';

export interface LanGingerbreadManProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGingerbreadMan(props: LanGingerbreadManProps): React.ReactElement;
export default LanGingerbreadMan;

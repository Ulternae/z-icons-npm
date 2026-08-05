import React from 'react';

export interface LanAlicornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlicorn(props: LanAlicornProps): React.ReactElement;
export default LanAlicorn;

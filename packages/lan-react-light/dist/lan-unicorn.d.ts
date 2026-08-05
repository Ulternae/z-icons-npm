import React from 'react';

export interface LanUnicornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnicorn(props: LanUnicornProps): React.ReactElement;
export default LanUnicorn;

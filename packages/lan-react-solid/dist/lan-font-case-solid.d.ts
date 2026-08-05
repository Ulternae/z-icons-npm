import React from 'react';

export interface LanFontCaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFontCaseSolid(props: LanFontCaseSolidProps): React.ReactElement;
export default LanFontCaseSolid;

import React from 'react';

export interface LanFontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFontSolid(props: LanFontSolidProps): React.ReactElement;
export default LanFontSolid;

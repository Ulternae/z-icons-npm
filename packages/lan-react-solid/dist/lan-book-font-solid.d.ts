import React from 'react';

export interface LanBookFontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookFontSolid(props: LanBookFontSolidProps): React.ReactElement;
export default LanBookFontSolid;

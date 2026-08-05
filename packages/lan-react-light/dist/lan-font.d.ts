import React from 'react';

export interface LanFontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFont(props: LanFontProps): React.ReactElement;
export default LanFont;

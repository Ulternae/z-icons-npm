import React from 'react';

export interface LanBookFontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookFont(props: LanBookFontProps): React.ReactElement;
export default LanBookFont;

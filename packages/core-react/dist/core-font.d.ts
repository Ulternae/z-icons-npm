import React from 'react';

export interface CoreFontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFont(props: CoreFontProps): React.ReactElement;
export default CoreFont;

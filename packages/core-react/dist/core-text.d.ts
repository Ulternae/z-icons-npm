import React from 'react';

export interface CoreTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreText(props: CoreTextProps): React.ReactElement;
export default CoreText;

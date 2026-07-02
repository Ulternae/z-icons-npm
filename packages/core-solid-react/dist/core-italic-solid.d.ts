import React from 'react';

export interface CoreItalicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreItalicSolid(props: CoreItalicSolidProps): React.ReactElement;
export default CoreItalicSolid;

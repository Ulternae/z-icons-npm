import React from 'react';

export interface CoreFontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFontSolid(props: CoreFontSolidProps): React.ReactElement;
export default CoreFontSolid;

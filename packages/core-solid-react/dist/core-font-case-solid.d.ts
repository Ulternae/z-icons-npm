import React from 'react';

export interface CoreFontCaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFontCaseSolid(props: CoreFontCaseSolidProps): React.ReactElement;
export default CoreFontCaseSolid;

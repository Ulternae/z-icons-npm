import React from 'react';

export interface NeoFontCaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFontCase(props: NeoFontCaseProps): React.ReactElement;
export default NeoFontCase;

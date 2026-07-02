import React from 'react';

export interface CoreFontCaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFontCase(props: CoreFontCaseProps): React.ReactElement;
export default CoreFontCase;

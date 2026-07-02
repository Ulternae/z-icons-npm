import React from 'react';

export interface CoreBoldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBold(props: CoreBoldProps): React.ReactElement;
export default CoreBold;

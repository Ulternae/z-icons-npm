import React from 'react';

export interface CoreBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBox(props: CoreBoxProps): React.ReactElement;
export default CoreBox;

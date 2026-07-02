import React from 'react';

export interface CoreShredderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShredder(props: CoreShredderProps): React.ReactElement;
export default CoreShredder;

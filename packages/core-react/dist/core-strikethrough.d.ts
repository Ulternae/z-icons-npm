import React from 'react';

export interface CoreStrikethroughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStrikethrough(props: CoreStrikethroughProps): React.ReactElement;
export default CoreStrikethrough;

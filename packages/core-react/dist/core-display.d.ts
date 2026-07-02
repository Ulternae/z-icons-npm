import React from 'react';

export interface CoreDisplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDisplay(props: CoreDisplayProps): React.ReactElement;
export default CoreDisplay;

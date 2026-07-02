import React from 'react';

export interface CoreCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCopy(props: CoreCopyProps): React.ReactElement;
export default CoreCopy;

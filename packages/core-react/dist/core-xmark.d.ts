import React from 'react';

export interface CoreXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreXmark(props: CoreXmarkProps): React.ReactElement;
export default CoreXmark;

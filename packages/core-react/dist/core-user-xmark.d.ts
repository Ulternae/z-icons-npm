import React from 'react';

export interface CoreUserXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUserXmark(props: CoreUserXmarkProps): React.ReactElement;
export default CoreUserXmark;

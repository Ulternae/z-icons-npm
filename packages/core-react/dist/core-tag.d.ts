import React from 'react';

export interface CoreTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTag(props: CoreTagProps): React.ReactElement;
export default CoreTag;

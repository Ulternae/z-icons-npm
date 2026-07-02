import React from 'react';

export interface CoreBugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBug(props: CoreBugProps): React.ReactElement;
export default CoreBug;

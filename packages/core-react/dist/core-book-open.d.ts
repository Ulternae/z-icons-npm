import React from 'react';

export interface CoreBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBookOpen(props: CoreBookOpenProps): React.ReactElement;
export default CoreBookOpen;

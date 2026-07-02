import React from 'react';

export interface CoreServerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreServer(props: CoreServerProps): React.ReactElement;
export default CoreServer;

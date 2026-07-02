import React from 'react';

export interface CoreSignalWeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSignalWeak(props: CoreSignalWeakProps): React.ReactElement;
export default CoreSignalWeak;

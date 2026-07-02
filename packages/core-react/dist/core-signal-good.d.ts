import React from 'react';

export interface CoreSignalGoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSignalGood(props: CoreSignalGoodProps): React.ReactElement;
export default CoreSignalGood;

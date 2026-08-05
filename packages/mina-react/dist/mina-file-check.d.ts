import React from 'react';

export interface MinaFileCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileCheck(props: MinaFileCheckProps): React.ReactElement;
export default MinaFileCheck;

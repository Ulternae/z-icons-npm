import React from 'react';

export interface MinaColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaColumns(props: MinaColumnsProps): React.ReactElement;
export default MinaColumns;

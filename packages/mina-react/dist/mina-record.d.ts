import React from 'react';

export interface MinaRecordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRecord(props: MinaRecordProps): React.ReactElement;
export default MinaRecord;
